import { Moon, Sun, FileBarChart, Github, Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import {
  useContext,
  useRef,
  useState,
  useEffect,
  Children,
  cloneElement,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { ThemeTog } from "../App";

const X = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ---------- Hook: track viewport width ---------- */

const useIsMobile = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false,
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
};

/* ---------- Dock Sub-components ---------- */

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  dark,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize],
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-2xl border cursor-pointer outline-none shadow-md transition-colors ${
        dark
          ? "bg-white/5 border-white/10 hover:bg-white/10 text-white"
          : "bg-black/5 border-black/10 hover:bg-black/10 text-black/70 hover:text-black/90"
      } ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        cloneElement(child, { isHovered, dark }),
      )}
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered, dark } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ x: "-50%" }}
          className={`absolute -top-7 left-1/2 w-fit whitespace-pre rounded-md border px-2 py-1 text-xs sm:text-sm ${
            dark
              ? "bg-[#120F17] border-white/10 text-white"
              : "bg-white border-black/10 text-black"
          } ${className}`}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Dock Container ---------- */

function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification,
  distance,
  panelHeight,
  baseItemSize,
  gap,
  dark,
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={({ pageX }) => mouseX.set(pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={{ height: panelHeight, gap }}
      className={`flex items-end rounded-3xl border px-3 sm:px-4 pb-2 pt-2 backdrop-blur-md shadow-xl ${
        dark ? "bg-[#120F17]/80 border-white/10" : "bg-white/60 border-black/10"
      } ${className}`}
      role="toolbar"
      aria-label="Application dock"
    >
      {items.map((item, index) => (
        <DockItem
          key={index}
          onClick={item.onClick}
          className={item.className}
          mouseX={mouseX}
          spring={spring}
          distance={distance}
          magnification={magnification}
          baseItemSize={baseItemSize}
          dark={dark}
        >
          <DockIcon>{item.icon}</DockIcon>
          <DockLabel>{item.label}</DockLabel>
        </DockItem>
      ))}
    </motion.div>
  );
}

/* ---------- Header ---------- */

const Header = () => {
  const { dark, setDark } = useContext(ThemeTog);
  const isMobile = useIsMobile();

  // Responsive dock sizing
  const dockConfig = isMobile
    ? {
        baseItemSize: 44,
        magnification: 60,
        panelHeight: 60,
        distance: 120,
        gap: 8,
        iconSize: "w-5 h-5",
      }
    : {
        baseItemSize: 60,
        magnification: 88,
        panelHeight: 76,
        distance: 180,
        gap: 14,
        iconSize: "w-6 h-6",
      };

  const handleNav =
    (path, external = false) =>
    () => {
      if (external) {
        window.open(path, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = path;
      }
    };

  const items = [
    {
      icon: <Home className={dockConfig.iconSize} strokeWidth={2} />,
      label: "Home",
      onClick: handleNav("/"),
    },
    {
      icon: <X className={dockConfig.iconSize} />,
      label: "Twitter",
      onClick: handleNav("https://x.com/mustaphAdegbite", true),
    },
    {
      icon: <Github className={dockConfig.iconSize} strokeWidth={2} />,
      label: "GitHub",
      onClick: handleNav("https://github.com/Genius-mu", true),
    },
    {
      icon: <FileBarChart className={dockConfig.iconSize} strokeWidth={2} />,
      label: "Resume",
      onClick: () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "mustapha adegbite's resume.pdf";
        link.click();
      },
    },
    {
      icon: <Mail className={dockConfig.iconSize} strokeWidth={2} />,
      label: "Hire me",
      onClick: handleNav("mailto:adegbitemustapha73@gmail.com"),
      className: dark
        ? "!bg-white !text-black hover:!bg-white/90"
        : "!bg-black !text-white hover:!bg-black/80",
    },
  ];

  return (
    <header className="w-full z-50 h-36 sm:h-40 flex justify-center items-center relative">
      {/* Dock */}
      <div className="fixed top-4 sm:top-6 z-50">
        <Dock
          items={items}
          dark={dark}
          baseItemSize={dockConfig.baseItemSize}
          magnification={dockConfig.magnification}
          panelHeight={dockConfig.panelHeight}
          distance={dockConfig.distance}
          gap={dockConfig.gap}
        />
      </div>

      {/* Theme toggle */}
      <div
        className={`fixed top-[4.7em] sm:top-[6.2em] px-3 py-1 rounded-b-xl z-50 border backdrop-blur-md ${
          dark
            ? "bg-[#120F17]/80 border-white/10"
            : "bg-white/60 border-black/10"
        }`}
      >
        <button
          onClick={() => setDark(!dark)}
          aria-label="Toggle dark mode"
          className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full flex items-center transition-colors duration-300 border border-gray-400 hover:shadow-lg ${
            dark ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <div
            className={`absolute w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-transform duration-300 shadow-md ${
              dark
                ? "translate-x-7 sm:translate-x-8 bg-indigo-500"
                : "translate-x-0.5 bg-yellow-400"
            }`}
          >
            {dark ? (
              <Moon className="w-3.5 h-3.5 text-white" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-white" />
            )}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
