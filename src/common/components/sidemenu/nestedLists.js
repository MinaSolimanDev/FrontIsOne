// nested list
const admins = [
  { title: "Brands", link: "/admin/administration/brands" },
  { title: "Branches", link: "/admin/administration/branches" },
  { title: "Suppliers", link: "/admin/administration/suppliers" },
  { title: "Roles", link: "/admin/administration/roles" },
  { title: "Users", link: "/admin/administration/users" },
  {
    title: "Category Profiles",
    link: "/admin/administration/category-profiles",
  },
];

const inventory = [
  { title: "Inventory Locations", link: "inventory/inventory-locations" },
  { title: "Product Packges", link: "inventory/product-packges" },
  { title: "Stock Request", link: "inventory/stock-request" },
  { title: "Stock Transfers", link: "inventory/stock-transfers" },
  { title: "Stock Receivings", link: "inventory/stock-receivings" },
  { title: "Stock Adjustments", link: "inventory/stock-adjustments" },
  { title: "Usable Items", link: "inventory/usable-items" },
  { title: "Stock Request", link: "inventory/stock-request" },
  { title: "Stock Adjustments", link: "inventory/stock-adjustments" },
];

const purchase = [
  { title: "Payment Terms", link: "purchasing/payment-terms" },
  { title: "Purchase Orders", link: "purchasing/purchase-orders" },
  { title: "Suggested Purchase", link: "purchasing/suggested-purchase" },
  { title: "Receiving Receipts", link: "purchasing/receiving-receipts" },
  { title: "Direct Receiving", link: "purchasing/direct-receiving" },
  { title: "Return Receipts", link: "purchasing/return-receipts" },
  { title: "Direct Return", link: "purchasing/direct-return" },
];

const nestedLists = { admins, inventory, purchase };

export default nestedLists;
