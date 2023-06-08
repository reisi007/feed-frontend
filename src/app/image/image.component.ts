import {Component, Input, OnInit} from '@angular/core';
import {computeImageFilename, DEFAULT_BREAKPOINTS, SIZES} from '../utils/ImageBreakpoints';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {

  @Input() filename!: string;
  @Input() height!: number;
  topPaddingPercent!: number;
  srcSet!: string;
  sizes!: string;

  ngOnInit(): void {
    this.topPaddingPercent = 100 * this.height / Math.max(...SIZES);
    this.srcSet = SIZES.map(s => `${computeImageFilename(this.filename, s)} ${s}w`).join(', ');
    this.sizes = Object.entries(DEFAULT_BREAKPOINTS)
                       .sort(([a], [b]) => Number(b) - Number(a))
                       .map(([key, cnt]) => {
                         if(key === '0') {
                           return `calc(100vw / ${cnt})`;
                         }
                         return `(max-width: ${key}px) calc(${key}px / ${cnt})`;
                       })
                       .join(',');
  }

  protected readonly computeImageFilename = computeImageFilename;
}
