import 'phaser';
import { MenuScene } from './scenes/MenuScene';

//https://docs.phaser.io/api-documentation/typedef/types-core
const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: MenuScene,
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

// Create game instance
const game = new Phaser.Game(config);