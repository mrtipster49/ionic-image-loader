import { NgModule } from '@angular/core';
import { ImgLoader } from './components/img-loader';
import { ImageLoader } from './providers/image-loader';
import { ImageLoaderConfig } from './providers/image-loader-config';
import { IonicModule } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { HttpClientModule } from '@angular/common/http';
var IonicImageLoader = /** @class */ (function () {
    function IonicImageLoader() {
    }
    IonicImageLoader.forRoot = function () {
        return {
            ngModule: IonicImageLoader,
            providers: [
                ImageLoaderConfig,
                ImageLoader,
                File,
            ]
        };
    };
    IonicImageLoader.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ImgLoader
                    ],
                    imports: [
                        IonicModule,
                        HttpClientModule,
                    ],
                    exports: [
                        ImgLoader
                    ]
                },] },
    ];
    return IonicImageLoader;
}());
export { IonicImageLoader };
//# sourceMappingURL=image-loader.module.js.map