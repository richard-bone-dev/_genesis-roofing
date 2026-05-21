import services from "../data/services.json";
import projects from "../data/projects.json";
import reviews from "../data/reviews.json";

export const getService = (slug) => services.find((service) => service.slug === slug);

export const getRelatedServices = (service) =>
  (service?.related || []).map(getService).filter(Boolean);

export const getProjectsForService = (slug) =>
  projects.items.filter((project) => project.serviceSlug === slug || project.tags.some((tag) => tag.toLowerCase().includes(slug)));

export const getFeaturedProjects = () => projects.items.filter((project) => project.featured);

export const getFeaturedReviews = () => reviews.filter((review) => review.featured);
