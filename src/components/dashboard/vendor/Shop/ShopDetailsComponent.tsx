import { H3, H4, Paragraph } from "@/components/shared/CustomTypography";
import { ShopData } from "@/types";

import Image from "next/image";

const ShopDetailsComponent = ({ data }: { data: ShopData }) => {
  return (
    <div className="p-10 space-y-5">
      <Image
        src={data?.logo}
        alt="Shop logo"
        height={100}
        width={100}
        className="object-cover rounded-full"
      />
      <div className="flex items-center justify-between">
        <H3>{data?.name}</H3>
        <H4>Shop Id: {data?.shopId}</H4>
      </div>
      <Paragraph className="text-primary-foreground text-xl">
        About the shop: {data?.description}
      </Paragraph>
    </div>
  );
};

export default ShopDetailsComponent;
