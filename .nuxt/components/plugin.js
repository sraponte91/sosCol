import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AboutCounter: () => import('../../components/AboutCounter.vue' /* webpackChunkName: "components/about-counter" */).then(c => wrapFunctional(c.default || c)),
  AboutOne: () => import('../../components/AboutOne.vue' /* webpackChunkName: "components/about-one" */).then(c => wrapFunctional(c.default || c)),
  AboutTwo: () => import('../../components/AboutTwo.vue' /* webpackChunkName: "components/about-two" */).then(c => wrapFunctional(c.default || c)),
  BecomeVolunteer: () => import('../../components/BecomeVolunteer.vue' /* webpackChunkName: "components/become-volunteer" */).then(c => wrapFunctional(c.default || c)),
  BlogDetails: () => import('../../components/BlogDetails.vue' /* webpackChunkName: "components/blog-details" */).then(c => wrapFunctional(c.default || c)),
  BlogHome: () => import('../../components/BlogHome.vue' /* webpackChunkName: "components/blog-home" */).then(c => wrapFunctional(c.default || c)),
  BlogPage: () => import('../../components/BlogPage.vue' /* webpackChunkName: "components/blog-page" */).then(c => wrapFunctional(c.default || c)),
  Brands: () => import('../../components/Brands.vue' /* webpackChunkName: "components/brands" */).then(c => wrapFunctional(c.default || c)),
  CallToAction: () => import('../../components/CallToAction.vue' /* webpackChunkName: "components/call-to-action" */).then(c => wrapFunctional(c.default || c)),
  CallToActionTwo: () => import('../../components/CallToActionTwo.vue' /* webpackChunkName: "components/call-to-action-two" */).then(c => wrapFunctional(c.default || c)),
  CauseDetails: () => import('../../components/CauseDetails.vue' /* webpackChunkName: "components/cause-details" */).then(c => wrapFunctional(c.default || c)),
  CauseFeatured: () => import('../../components/CauseFeatured.vue' /* webpackChunkName: "components/cause-featured" */).then(c => wrapFunctional(c.default || c)),
  Causes: () => import('../../components/Causes.vue' /* webpackChunkName: "components/causes" */).then(c => wrapFunctional(c.default || c)),
  CausesPage: () => import('../../components/CausesPage.vue' /* webpackChunkName: "components/causes-page" */).then(c => wrapFunctional(c.default || c)),
  ContactPage: () => import('../../components/ContactPage.vue' /* webpackChunkName: "components/contact-page" */).then(c => wrapFunctional(c.default || c)),
  Donate: () => import('../../components/Donate.vue' /* webpackChunkName: "components/donate" */).then(c => wrapFunctional(c.default || c)),
  EventDetails: () => import('../../components/EventDetails.vue' /* webpackChunkName: "components/event-details" */).then(c => wrapFunctional(c.default || c)),
  EventPage: () => import('../../components/EventPage.vue' /* webpackChunkName: "components/event-page" */).then(c => wrapFunctional(c.default || c)),
  EventTwo: () => import('../../components/EventTwo.vue' /* webpackChunkName: "components/event-two" */).then(c => wrapFunctional(c.default || c)),
  Faq: () => import('../../components/Faq.vue' /* webpackChunkName: "components/faq" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Funfact: () => import('../../components/Funfact.vue' /* webpackChunkName: "components/funfact" */).then(c => wrapFunctional(c.default || c)),
  GalleryPage: () => import('../../components/GalleryPage.vue' /* webpackChunkName: "components/gallery-page" */).then(c => wrapFunctional(c.default || c)),
  GalleryTestimonial: () => import('../../components/GalleryTestimonial.vue' /* webpackChunkName: "components/gallery-testimonial" */).then(c => wrapFunctional(c.default || c)),
  GalleryTwo: () => import('../../components/GalleryTwo.vue' /* webpackChunkName: "components/gallery-two" */).then(c => wrapFunctional(c.default || c)),
  GoogleMap: () => import('../../components/GoogleMap.vue' /* webpackChunkName: "components/google-map" */).then(c => wrapFunctional(c.default || c)),
  NavOne: () => import('../../components/NavOne.vue' /* webpackChunkName: "components/nav-one" */).then(c => wrapFunctional(c.default || c)),
  NavTwo: () => import('../../components/NavTwo.vue' /* webpackChunkName: "components/nav-two" */).then(c => wrapFunctional(c.default || c)),
  PageHeader: () => import('../../components/PageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c)),
  Pricing: () => import('../../components/Pricing.vue' /* webpackChunkName: "components/pricing" */).then(c => wrapFunctional(c.default || c)),
  ServiceOne: () => import('../../components/ServiceOne.vue' /* webpackChunkName: "components/service-one" */).then(c => wrapFunctional(c.default || c)),
  ServiceTwo: () => import('../../components/ServiceTwo.vue' /* webpackChunkName: "components/service-two" */).then(c => wrapFunctional(c.default || c)),
  SliderOne: () => import('../../components/SliderOne.vue' /* webpackChunkName: "components/slider-one" */).then(c => wrapFunctional(c.default || c)),
  SliderTwo: () => import('../../components/SliderTwo.vue' /* webpackChunkName: "components/slider-two" */).then(c => wrapFunctional(c.default || c)),
  Team: () => import('../../components/Team.vue' /* webpackChunkName: "components/team" */).then(c => wrapFunctional(c.default || c)),
  TestimonialOne: () => import('../../components/TestimonialOne.vue' /* webpackChunkName: "components/testimonial-one" */).then(c => wrapFunctional(c.default || c)),
  VideoCard: () => import('../../components/VideoCard.vue' /* webpackChunkName: "components/video-card" */).then(c => wrapFunctional(c.default || c)),
  VideoCardTwo: () => import('../../components/VideoCardTwo.vue' /* webpackChunkName: "components/video-card-two" */).then(c => wrapFunctional(c.default || c)),
  Volunteers: () => import('../../components/Volunteers.vue' /* webpackChunkName: "components/volunteers" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
