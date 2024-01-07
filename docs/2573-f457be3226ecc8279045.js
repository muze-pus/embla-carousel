"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[2573],{2573:function(e,n,a){a.r(n),n.default='import React from \'react\'\nimport { EmblaOptionsType } from \'embla-carousel\'\nimport useEmblaCarousel from \'embla-carousel-react\'\nimport imageByIndex from \'../imageByIndex\'\n\ntype PropType = {\n  slides: number[]\n  options?: EmblaOptionsType\n}\n\nconst EmblaCarousel: React.FC<PropType> = (props) => {\n  const { slides, options } = props\n  const [emblaRef] = useEmblaCarousel(options)\n\n  return (\n    <div className="embla" dir="rtl">\n      <div className="embla__viewport" ref={emblaRef}>\n        <div className="embla__container">\n          {slides.map((index) => (\n            <div className="embla__slide" key={index}>\n              <div className="embla__slide__number">\n                <span>{index + 1}</span>\n              </div>\n              <img\n                className="embla__slide__img"\n                src={imageByIndex(index)}\n                alt="Your alt text"\n              />\n            </div>\n          ))}\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default EmblaCarousel\n'}}]);
//# sourceMappingURL=2573-f457be3226ecc8279045.js.map