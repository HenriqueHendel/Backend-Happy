import Image from "../../typeorm/entities/OrphanageImages";

export default {
    render(image: Image){
        return {
            id: image.id,
            path: `http://localhost:3333/upload/${image.path}`
        }

    },

    renderMany(images: Image[]){
        return images.map(image => this.render(image));
    }
}