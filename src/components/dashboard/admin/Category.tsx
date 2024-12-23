import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import Heading from "@/components/shared/CustomHeading";
import { DataTable } from "@/components/shared/DataTable";
import { AdminCategoryTableColumns } from "@/components/shared/tableColumnDef/AdminCategoryTableColumns";
import { Dialog } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Category as ICategory,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from "@/redux/api/categoryApi";
import { Pencil, Trash } from "lucide-react";
import React, { useState } from "react";
import EditCategoryInfoModal from "./category/EditCategoryInfoModal";
import CustomButtonWithToolTip from "@/components/shared/CustomButtonWithToolTip";

const Category = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { data } = useGetCategoriesQuery({ page, limit });
  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null,
  );
  const [isEditOpen, setIsEditOpen] = useState(false);

  const { toast } = useToast();

  const totalPages = Math.ceil((data?.meta?.total || 0) / limit);

  const handlePreviousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handleEditCategory = async (
    id: string,
    updatedData: Partial<ICategory>,
  ) => {
    try {
      const updatedCategory = await updateCategory({
        id,
        data: updatedData,
      }).unwrap();
      toast({
        description: `Category "${updatedCategory.name}" updated successfully!`,
      });
      setIsEditOpen(false);
    } catch (error) {
      console.error("Error updating category:", error);
      toast({
        description: "Failed to update category. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory(id).unwrap();
      toast({
        description: "Category deleted successfully!",
      });
    } catch (error) {
      console.error("Error deleting category:", error);
      toast({
        description: "Failed to delete category. Please try again.",
        variant: "destructive",
      });
    }
  };

  const columns = AdminCategoryTableColumns.map((col) =>
    col.id === "actions"
      ? {
          ...col,
          cell: ({ row }: any) => (
            <div className="flex space-x-2">
              <CustomButtonWithToolTip
                className="bg-green-600 hover:bg-green-700 text-white"
                text="Edit Category"
                icon={<Pencil />}
                onClick={() => {
                  setIsEditOpen(true);
                  setSelectedCategory(row.original);
                }}
              ></CustomButtonWithToolTip>
              <CustomButtonWithToolTip
                className="bg-red-600 hover:bg-red-700 text-white"
                text="Delete Category"
                icon={<Trash />}
                onClick={() => handleDeleteCategory(row.original.id)}
              ></CustomButtonWithToolTip>
            </div>
          ),
        }
      : col,
  );

  return (
    <div>
      <CustomBreadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Dashboard", path: "/dashboard/admin" },
          { label: "Category" },
        ]}
        title="Category Page"
      />
      <div className="p-5 pb-20">
        <div className="flex justify-center items-center pt-10 pb-20">
          <Heading text="Categories" className="text-4xl lg:text-6xl" />
        </div>
        <DataTable
          data={data?.data || []}
          columns={columns}
          pageIndex={page}
          totalPages={totalPages}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
        />
      </div>
      {isEditOpen && selectedCategory && (
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <EditCategoryInfoModal
            category={selectedCategory}
            onSubmit={(formData) =>
              handleEditCategory(selectedCategory.id, formData)
            }
            isLoading={isLoading}
          />
        </Dialog>
      )}
    </div>
  );
};

export default Category;
