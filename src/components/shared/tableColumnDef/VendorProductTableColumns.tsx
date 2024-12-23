"use client";

import { VendorProductActions } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

import { Pencil, Copy, Tag } from "lucide-react";
import CustomButtonWithToolTip from "../CustomButtonWithToolTip";

export const vendorProductTableColumns: ColumnDef<VendorProductActions>[] = [
  { accessorKey: "categoryName", header: "Category Name" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "description", header: "Description" },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "inventory", header: "Inventory" },
  { accessorKey: "discount", header: "Discount" },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product: VendorProductActions = row.original;

      return (
        <div className="flex space-x-2">
          <CustomButtonWithToolTip
            className="bg-green-600 hover:bg-green-700 text-white"
            icon={<Pencil />}
            text="Edit"
            onClick={() => product.handleEdit(product)}
          ></CustomButtonWithToolTip>
          <CustomButtonWithToolTip
            className="bg-orange-400 hover:bg-orange-500 text-white"
            text="Copy Product"
            icon={<Copy />}
            onClick={() => product.handleDuplicate(product)}
          ></CustomButtonWithToolTip>
          <CustomButtonWithToolTip
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
            icon={<Tag />}
            text="Create Flash Sale"
            onClick={() => product.handleFlashSale(product)}
          ></CustomButtonWithToolTip>
        </div>
      );
    },
  },
];
