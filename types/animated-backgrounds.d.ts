declare module "animated-backgrounds" {
    import { ComponentType } from "react";

    interface AnimatedBackgroundProps {
        animationName: string;
    }

    export const AnimatedBackground: ComponentType<AnimatedBackgroundProps>;
}
