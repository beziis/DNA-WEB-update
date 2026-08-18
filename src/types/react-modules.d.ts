declare module 'react' {
  export type ReactNode = any;
  export type ReactElement = any;
  export type ComponentType<P = any> = (props: P) => any;
  export type FC<P = any> = (props: P) => any;
  export type ElementType<P = any> = string | ComponentType<P>;
  export type Ref<T> = { current: T | null } | ((instance: T | null) => void) | null;
  export type RefObject<T> = { current: T };

  export type CSSProperties = Record<string, any>;
  export type SyntheticEvent<T = Element, E = Event> = {
    target: T;
    currentTarget: T;
    preventDefault(): void;
    stopPropagation(): void;
    nativeEvent: E;
  };
  export type FormEvent<T = Element> = SyntheticEvent<T>;
  export type ChangeEvent<T = Element> = SyntheticEvent<T>;
  export type MouseEvent<T = Element> = SyntheticEvent<T>;
  export type TouchEvent<T = Element> = SyntheticEvent<T>;
  export type KeyboardEvent<T = Element> = SyntheticEvent<T> & { key: string };
  export type ReactEventHandler<T = Element> = (event: SyntheticEvent<T>) => void;
  export type ImgHTMLAttributes<T> = Record<string, any>;
  export type HTMLAttributes<T> = Record<string, any>;
  export type SVGProps<T> = Record<string, any>;

  export function useState<T>(initialState: T | (() => T)): [T, (action: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useRef<T = undefined>(): { current: T | undefined };
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: readonly any[]): T;
  export function useMemo<T>(factory: () => T, deps: readonly any[]): T;
  export function useContext<T>(context: any): T;
  export function createContext<T>(defaultValue: T): any;
  export function forwardRef<T, P = {}>(render: (props: P, ref: any) => any): (props: P & { ref?: any }) => any;
  export function memo<T>(Component: T): T;

  export const StrictMode: (props: { children?: ReactNode }) => any;
  export const Fragment: (props: { children?: ReactNode }) => any;

  export namespace JSX {
    export type Element = any;
    export interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  const React: {
    useState: typeof useState;
    useEffect: typeof useEffect;
    useRef: typeof useRef;
    useCallback: typeof useCallback;
    useMemo: typeof useMemo;
    useContext: typeof useContext;
    createContext: typeof createContext;
    forwardRef: typeof forwardRef;
    memo: typeof memo;
    StrictMode: typeof StrictMode;
    Fragment: typeof Fragment;
    [key: string]: any;
  };

  export default React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
  export namespace JSX {
    export type Element = any;
    export interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react/jsx-dev-runtime' {
  export const jsxDEV: any;
  export const Fragment: any;
  export namespace JSX {
    export type Element = any;
    export interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react-dom' {
  export function render(element: any, container: any): any;
  export function createPortal(children: any, container: any): any;
  const ReactDOM: {
    render: typeof render;
    createPortal: typeof createPortal;
    [key: string]: any;
  };
  export default ReactDOM;
}

declare module 'react-dom/client' {
  export interface Root {
    render(children: any): void;
    unmount(): void;
  }
  export function createRoot(container: any): Root;
  export function hydrateRoot(container: any, initialChildren: any): Root;
}

declare module 'motion/react' {
  export const motion: any;
  export const AnimatePresence: any;
  export type Variants = Record<string, any>;
  export type MotionProps = Record<string, any>;
  export function useScroll(options?: any): { scrollY: any; scrollYProgress: any; scrollX: any; scrollXProgress: any };
  export function useTransform<T, U>(value: any, inputRange: any[], outputRange: any[], options?: any): any;
  export function useInView(ref: any, options?: any): boolean;
  export function useAnimation(): any;
}

declare module 'motion' {
  export * from 'motion/react';
}

declare module 'lucide-react' {
  export type Icon = (props: any) => any;
  export const LucideIcon: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const Phone: Icon;
  export const Sun: Icon;
  export const Moon: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  export const Send: Icon;
  export const Linkedin: Icon;
  export const Instagram: Icon;
  export const Facebook: Icon;
  export const Globe: Icon;
  export const CheckCircle2: Icon;
  export const ArrowRight: Icon;
  export const ArrowDown: Icon;
  export const Database: Icon;
  export const LayoutDashboard: Icon;
  export const Shield: Icon;
  export const ShieldCheck: Icon;
  export const Sparkles: Icon;
  export const AlertCircle: Icon;
  export const Handshake: Icon;
  export const TrendingUp: Icon;
  export const FileText: Icon;
  export const BarChart3: Icon;
  export const Cpu: Icon;
  export const Code: Icon;
  export const Lightbulb: Icon;
  export const Smartphone: Icon;
  export const Users2: Icon;
  export const Users: Icon;
  export const Award: Icon;
  export const Headset: Icon;
  export const Target: Icon;
  export const Navigation: Icon;
  export const ExternalLink: Icon;
  export const Building2: Icon;
  export const Compass: Icon;
  export const Filter: Icon;
  export const Zap: Icon;
  export const ChevronRight: Icon;
  export const Activity: Icon;
  export const Landmark: Icon;
  export const Rocket: Icon;
  export const GraduationCap: Icon;
  export const Layers: Icon;
  export const RefreshCw: Icon;
  export const Play: Icon;
  export const Pause: Icon;
  const icons: Record<string, Icon>;
  export default icons;
}

declare module 'recharts' {
  export const ResponsiveContainer: any;
  export const BarChart: any;
  export const Bar: any;
  export const XAxis: any;
  export const YAxis: any;
  export const Tooltip: any;
  export const CartesianGrid: any;
  export const LineChart: any;
  export const Line: any;
  export const PieChart: any;
  export const Pie: any;
  export const Cell: any;
  export const Legend: any;
  export const AreaChart: any;
  export const Area: any;
}

declare module '@vis.gl/react-google-maps' {
  export const APIProvider: any;
  export const Map: any;
  export const AdvancedMarker: any;
  export const Pin: any;
  export const InfoWindow: any;
  export const Marker: any;
  export function useMap(): any;
  export function useMapsLibrary(name: string): any;
}

declare global {
  namespace JSX {
    type Element = any;
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
  namespace React {
    namespace JSX {
      type Element = any;
      interface IntrinsicElements {
        [elemName: string]: any;
      }
    }
  }
}
