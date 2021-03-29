import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite'

import PATHS from '../paths';

export default function svg() {
  return gulp
    .src(PATHS.src.svg)
    .pipe(svgSprite({
      mode: {
        symbol: {
          render: {
            css: false,
            scss: false
          },
          dest: PATHS.build.svg,
          prefix: '.svg--%s',
          sprite: 'sprite.svg',
          example: false
        }
      },
      shape: {
        id: {
          generator: 'icon-'
        }
      }
    }))
    // .pipe(gulp.dest(PATHS.build.svg));
    .pipe(gulp.dest('.'));
}