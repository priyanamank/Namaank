/** Connected website domains — keep in sync with server/lib/connected-sites.ts */
export const CONNECTED_SITE_OPTIONS = [
  { value: "all", label: "All orders" },
  { value: "ankshaastra.com", label: "Namaank (main site)" },
] as const;

export const EMPOWER_SOURCE = "empower.ankshaastra.com";
export const SHOP_SOURCE = "shop.ankshaastra.com";

export const HUB_API_BASE =
  typeof window !== "undefined" && window.location.hostname === "localhost"
    ? `${window.location.origin}/api`
    : "https://ankshaastra.com/api";
