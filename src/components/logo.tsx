
export function Logo() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex items-center gap-4">
            <button 
                onClick={scrollToTop}
                className="text-2xl font-bold font-sans tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
            >
                NT
            </button>
            <span className="hidden md:inline-flex items-center px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-xs font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Actively Seeking Opportunities
            </span>
        </div>
    );
}

