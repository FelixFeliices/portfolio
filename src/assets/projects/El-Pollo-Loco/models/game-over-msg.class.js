class GameOverMsg extends MovebaleObject {
    x = 0;
    y = 480;
    width = 720;
    height = 480;

    /**
     * Initializes the GameOverMsg object with its image and position.
     */
    constructor() {
        super().loadImage(
            "./assets/img/9_intro_outro_screens/game_over/oh no you lost!.png"
        );
    }
}
