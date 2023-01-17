"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[2797],{2797:function(e,n,l){l.r(n),n.default="import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel'\nimport { setupTweenScale } from './tween-scale'\nimport '../css/base.css'\nimport '../css/sandbox.css'\nimport '../css/embla.css'\n \nconst OPTIONS: EmblaOptionsType = {}\n \nconst emblaNode = <HTMLElement>document.querySelector('.embla')\nconst viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')\n \nconst emblaApi = EmblaCarousel(viewportNode, OPTIONS)\nconst { applyTweenScale, removeTweenScale } = setupTweenScale(emblaApi)\n \nemblaApi\n  .on('init', applyTweenScale)\n  .on('scroll', applyTweenScale)\n  .on('reInit', applyTweenScale)\n  .on('destroy', removeTweenScale)\n"}}]);
//# sourceMappingURL=2797-67d1f0da10e4e148c1fc.js.map