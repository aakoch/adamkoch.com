
# Issues

## # 1 style(type=application/scss) errors
  Using type=text/scss works
## # 2 SVGs aren't properly minimized
  "minifySvg": false
## # 3 Pug imports wonky
## # 4 Sass variables not passed down
  Might have to do this for it to work: https://v2.parceljs.org/languages/css/#postcss-import
## # 5 CORS
  see .proxyrc.js
  
## # 9 Sharp causes segmentation faults
## # 10 strange imports 
## # 11 Some reporter is broken
## # 12 No logging
  --log-level=verbose doesn't seem to do anything
## # 13
  "countdown": "git://github.com/mckamey/countdownjs.git#1902fb23d21d84958b302c117fe472634a5bcf52",

## # 14
  *Have* to use an external stylesheet because of bug Parcel doesn't seem to honor the configuration in .cssnanorc.  I have to turn off minifyGradients because of a bug in cssnano which removes the first stop in gradients. https://github.com/cssnano/cssnano/issues/650

## # 15
  .cssnanorc option "minifyGradients": false
  *Have* to use an external stylesheet because Parcel doesn't seem to honor the   configuration in .cssnanorc for scripts that are in the page. And I have to turn off minifyGradients because of a bug in cssnano which removes the first stop in gradients. https://github.com/cssnano/cssnano/issues/650
  Or use the workaround: use a really small decimal like .0001px 