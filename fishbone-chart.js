import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class FishboneChart {
    @bindable data;
    @bindable cols;

    causes = undefined;
    effect = undefined;
    index  = 0;

    topCausesGrouped;
    effectValue;

    attached() {
        this.selectDataset(this.index);
        this.centerEffect();
    }

    centerEffect() {
        setTimeout(() => {
            const topCausesGroupedHeight = this.topCausesGrouped.offsetHeight;
            const effectValueHeight      = this.effectValue.offsetHeight;
            const paddingToSet           = topCausesGroupedHeight - effectValueHeight / 2;

            this.effectValue.style.marginTop = `${paddingToSet}px`;

        }, 0);
    }

    selectDataset(index) {
        if (this.data) {
            const effect = Object.keys(this.data)[index];
            this.causes  = this.data[effect];
            this.effect  = effect;
            this.index   = index;
        }

        this.centerEffect();
    }

    getColor(index) {
        const colors = ['blue', 'pink', 'gray', 'green', 'blue_two', 'orange', 'black', 'purple'];
        return colors[index % colors.length];
    }

    getColorRgb(index) {
        const colors = [
            'rgb(0, 192, 239) !important',
            'rgb(216, 27, 96) !important',
            'rgb(104, 115, 140) !important',
            'rgb(48, 187, 187) !important',
            'rgb(11, 120, 206) !important',
            'rgb(255, 119, 1) !important',
            'rgb(17, 17, 17) !important',
            'rgb(85, 82, 153) !important',
        ];
        return colors[index % colors.length];
    }

    getTopCauses(causes) {
        const categories = Object.keys(causes);
        const middle     = Math.floor(categories.length / 2);
        return categories.slice(0, middle).map(category => ({ category, causes: causes[category] }));
    }

    getBottomCauses(causes) {
        const categories = Object.keys(causes);
        const middle     = Math.floor(categories.length / 2);
        return categories.slice(middle).map(category => ({ category, causes: causes[category] }));
    }

    getRootCauses(rootCauses) {
        return rootCauses;
    }

    // Implementing the missing methods
    getCauses() {
        if (!this.causes) {
            return [];
        }
        const topCauses    = this.getTopCauses(this.causes);
        const bottomCauses = this.getBottomCauses(this.causes);
        return [...topCauses, ...bottomCauses];
    }

    getEffect() {
        return this.effect;
    }

    getLegend() {
        const labels = Object.keys(this.data || {});
        return labels.map((label, index) => {
            const labelClass = index === this.index ? 'label_' : 'labelLineThrough';
            const color      = this.getColor(index);
            return { label, index, labelClass, color };
        });
    }
}
