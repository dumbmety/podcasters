import clsx from "clsx";
import { CheckIcon } from "@radix-ui/react-icons";
import { Switch } from "../ui/switch";

function Pricing({
  isSelected,
  children,
}: {
  isSelected?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li
      className={clsx(
        "flex-1 flex flex-col min-h-96 relative",
        isSelected &&
          "before:absolute before:inset-0 before:z-10 before:scale-105 before:rounded-lg before:bg-neutral-50"
      )}
    >
      <div className="flex flex-1 flex-col relative z-20">{children}</div>
    </li>
  );
}

function PricingHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b px-5 pb-6 min-h-32 flex flex-col">{children}</div>
  );
}

function PricingTitle({ children }: { children: string }) {
  return <h3 className="capitalize mb-0.5">{children}</h3>;
}

function PricingAmount({
  discount,
  children,
}: {
  discount?: number | false;
  children: string | string[];
}) {
  return (
    <p className="font-light mb-5 flex items-center space-x-1">
      <span>{children}</span>{" "}
      {discount && (
        <span className="text-xs bg-brand rounded-full px-1.5 py-0.5 text-white">
          -{discount}%
        </span>
      )}
    </p>
  );
}

function PricingDesc({ children }: { children: string }) {
  return <p className="text-xs font-light mt-auto">{children}</p>;
}

function PricingSwitch({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center mt-auto">
      <Switch
        id="billing"
        checked={value}
        onCheckedChange={(value) => onChange(!!value)}
      />
      <label
        htmlFor="billing"
        className="pl-2 text-xs select-none cursor-pointer"
      >
        Billed yearly
      </label>
    </div>
  );
}

function PricingContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-5 py-6 flex-1 items-start flex flex-col">{children}</div>
  );
}

function PricingList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 flex-1">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center space-x-2 text-sm font-light"
        >
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PricingActions({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center space-x-1 text-sm">{children}</div>;
}

function PricingButton({
  children,
  isFill = false,
}: {
  isFill?: boolean;
  children: string;
}) {
  return (
    <button
      className={clsx(
        "rounded-md px-3 py-1.5",
        isFill ? "bg-brand text-white" : "bg-neutral-100"
      )}
    >
      {children}
    </button>
  );
}

Pricing.Header = PricingHeader;
Pricing.Title = PricingTitle;
Pricing.Amount = PricingAmount;
Pricing.Desc = PricingDesc;
Pricing.Switch = PricingSwitch;
Pricing.Content = PricingContent;
Pricing.List = PricingList;
Pricing.Actions = PricingActions;
Pricing.Button = PricingButton;

export default Pricing;
