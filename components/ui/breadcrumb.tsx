 /* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type BreadcrumbProps = {
  items?: string[];
  rootLabel?: string;
  rootLink?: string | null; 
};

const Breadcrumb = ({ items = [], rootLabel = "Home", rootLink = "/" }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-2 text-[16px] font-semibold leading-6 tracking-normal">
      {rootLink ? (
        <Link href={rootLink} className="cursor-pointer">
          {rootLabel}
        </Link>
      ) : (
        <span>{rootLabel}</span>
      )}

      {items.map((item, index) => (
        <div key={item} className="flex items-center gap-2">
          <img
            src="/assets/icons/layer-(1).png"
            alt=""
            className="h-3 w-3 object-contain"
          />

          <span>{item}</span>

          {index === items.length - 1 && (
            <img
              src="/assets/icons/layer-(1).png"
              alt=""
              className="h-3 w-3 object-contain"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
