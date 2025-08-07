"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icons } from "@/components/icons";
type MobileNavProps = {
  items: NavItem[];
  className?: string;
};

export function MobileNav({
  items,
  className,
}: MobileNavProps) {
  const segment = useLocation().pathname.split("/")[1];
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={className}>
      <button
        className="flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <Icons.close className="h-6 w-6" />
        ) : (
          <Icons.play className="h-6 w-6" />
        )}
        <span className="font-bold">Menu</span>
      </button>
      {isOpen && (
        <div
          className={
            "fixed inset-0 top-16 z-50 overflow-auto bg-background/80 px-6 pb-32 animate-in slide-in-from-bottom-80"
          }
        >
          <div className="z-20 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
            <Accordion
              type="multiple"
              defaultValue={items.map((item) => item.title)}
            >
              {items?.map((item, index) => (
                <AccordionItem value={item.title} key={index}>
                  <AccordionTrigger className="text-sm capitalize">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {item.href && (
                        <MobileLink
                          href={item.href}
                          segment={String(segment)}
                          setIsOpen={setIsOpen}
                          disabled={item.disabled}
                        >
                          {item.title}
                        </MobileLink>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}
    </div>
  );
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  disabled?: boolean;
  segment: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
  className,
}: MobileLinkProps) {
  return (
    <Link
      to={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60",
        className,
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
