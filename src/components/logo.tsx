import Link from "next/link";

export function Logo() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button 
            onClick={scrollToTop}
            className="text-2xl font-bold font-sans tracking-tight hover:opacity-80 transition-opacity"
        >
            NT
        </button>
    );
}

