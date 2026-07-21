import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState, useEffect } from "react";

const ParticlesBackground = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkIsDesktop();
        window.addEventListener('resize', checkIsDesktop);
        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);

    if (!isDesktop) return null;

    const options = {
        fullScreen: { enable: false },
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60, // Lowered from 120 for better performance even on desktop
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 200,
                    links: {
                        opacity: 0.5,
                        color: "#BE1A1A"
                    }
                },
            },
        },
        particles: {
            color: {
                value: ["#BE1A1A", "#D0311E", "#F7D87F"],
            },
            links: {
                color: "#F7D87F",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1.5,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 60,
            },
            opacity: {
                value: 0.6,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 4 },
            },
        },
        detectRetina: true,
    };

    return (
        <ParticlesProvider init={async (engine) => await loadSlim(engine)}>
            <Particles
                id="tsparticles"
                options={options}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    borderRadius: '1.5rem',
                    pointerEvents: 'auto'
                }}
            />
        </ParticlesProvider>
    );
};

export default ParticlesBackground;
