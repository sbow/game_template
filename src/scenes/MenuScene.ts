export class MenuScene extends Phaser.Scene {
    private demo_rectangle!: Phaser.GameObjects.Rectangle;

    //constructor() {
    //    super({ key: 'MenuScene'})
    //}

    preload() {
        // this.load.image ect, preload art / media
    }

    create() {
        // set this.background, text elments available on load
        console.log('hello world!');
        this.demo_rectangle = this.add.rectangle(
            400,
            300,
            100,
            100,
            0xff0000
        );
    }

    update(time: number, delta: number) {
        // This method is called once per game step while the scene is running.
        // https://docs.phaser.io/api-documentation/class/scene
    }
    
}