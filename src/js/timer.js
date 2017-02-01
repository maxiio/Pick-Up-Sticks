export default class Timer{
    constructor(){
        this.startTime =  30000;
        this.currentTime =  30000;
        this.onFinish =  () => {
        };
        this.start =  () => {
            setTimeout(() => {
                this.currentTime = this.currentTime - 1000;
                if (this.currentTime === 0) {
                    this.onFinish();
                }
            }, 1000);
        };
        this.reset =  () => {
            this.currentTime = this.startTime;
        };
        this.pause =  () => {
            clearTimeout(this.start);
        };
        this.finish =  () => {
            this.onFinish();
        };
        this.currentTimeInSeconds =  () => {
            return this.currentTime / 1000;
        }
    }
};
