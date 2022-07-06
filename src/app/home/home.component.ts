import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Autoplay, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
// don't import from 'swiper/core' but from 'swiper'
import SwiperCore, {
  Pagination,
  EffectCube
} from 'swiper';

SwiperCore.use([Pagination, EffectCube]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // to use the encapsulation: css (the default class value)
  encapsulation: ViewEncapsulation.None
})

// add AfterContentChecked to the component's lifecycle hook
export class HomeComponent implements AfterContentChecked {

  @ViewChild('swiper') swiper!: SwiperComponent;

  config: SwiperOptions = {
    pagination: true,
    slidesPerView: 'auto',
    effect: 'cube'
  }

  images = [
    './assets/images/hawaii1.jpg',
    './assets/images/hawaii2.jpg',
    './assets/images/hawaii3.jpg',
    './assets/images/hawaii4.jpg',
    './assets/images/hawaii5.jpg',
    './assets/images/hawaii6.jpg'
  ];


  constructor() { }

  // add a method to the component's lifecycle hook
  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }

  }

  touchAllowed = false;

  next() {
    this.swiper.swiperRef.slideNext(500);
  }

  prev() {
    this.swiper.swiperRef.slidePrev(500);
  }

  toggleTouch() {
    this.touchAllowed = !this.touchAllowed;
    this.swiper.swiperRef.allowTouchMove = this.touchAllowed;
  }
}
