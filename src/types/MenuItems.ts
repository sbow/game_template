// MenuItems.ts
// A dataclass for menu trees

export interface MenuItems {
    text: string;
    focus: boolean;
    scene?: Phaser.Scene;

}