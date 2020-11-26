export class Post {
    constructor(title, logo) {
        this.title = title;
        this.img = logo;
        this.date = new Date();
    }
    
    toString() {
        return JSON.stringify({
            title: this.title,
            img: this.img,
            date: this.date.toJSON()
        }, null, 2)
    }

    getUppercase() {
        return this.title.toUpperCase();
    }
}