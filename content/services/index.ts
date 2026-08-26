import type { Path, ServiceCategory, ServiceCategoryId, ServiceDoc } from '../types'
import { roofingCategory, roofingServices } from './roofing'
import { guttersCategory, guttersServices } from './gutters'
import { doorsCategory, doorsServices } from './doors'
import { restorationCategory, restorationServices } from './restoration'
import { exteriorsCategory, exteriorsServices } from './exteriors'

export const categories: ServiceCategory[] = [
  roofingCategory,
  guttersCategory,
  doorsCategory,
  restorationCategory,
  exteriorsCategory,
]

export const services: ServiceDoc[] = [
  ...roofingServices,
  ...guttersServices,
  ...doorsServices,
  ...restorationServices,
  ...exteriorsServices,
]

export const categoryById = (id: ServiceCategoryId) => categories.find((c) => c.id === id)
export const servicesInCategory = (id: ServiceCategoryId) => services.filter((s) => s.category === id)
export const serviceBy = (category: string, id: string) =>
  services.find((s) => s.category === category && s.id === id)

export const categoryPath = (c: ServiceCategory): Path => `/services/${c.id}`
export const servicePath = (s: ServiceDoc): Path => `/services/${s.category}/${s.id}`
