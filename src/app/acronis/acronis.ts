import { Component } from '@angular/core';
import packages from '../../assets/acronis_packages.json';

@Component({
	selector: 'acronis',
	templateUrl: './acronis.html',
	styleUrls: ['./acronis.less']
})
export class AcronisComponent {
    packages = packages.packages;

    selectPackage(i: number) {
        let p = this.packages[i];
        console.log(p.name, p.options)
    }
}
