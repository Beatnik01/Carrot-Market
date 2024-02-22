import { cls } from "../libs/utils";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({ title, canGoBack, hasTabBar, children }: LayoutProps) {
  return (
    <div>
      <div className="max-w-xl bg-white w-full text-lg font-medium py-3 fixed text-gray-800 border-b top-0 justify-center flex items-center">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-16", hasTabBar ? "pb-16" : "")}>{children}</div>
      <nav className="max-w-xl bg-white text-gray-700 border-t fixed w-full px-10 pb-5 pt-3 flex justify-between text-xs bottom-0">
        <span>312312</span>
      </nav>
    </div>
  );
}
