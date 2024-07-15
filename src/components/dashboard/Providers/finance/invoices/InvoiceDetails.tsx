import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Copy } from "lucide-react";

const InvoiceDetails = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <p className="text-[#00C444] capitalize font-medium text-base">
            see details
          </p>
        </SheetTrigger>
        <SheetContent className="lg:max-w-md">
          <SheetHeader>
            <SheetTitle className="flex justify-between border-b border-solid border-slate-200 pb-3">
              <h3 className="text-lg font-semibold pl-3">Invoice #9</h3>
              <Button className="flex items-center gap-2" variant="outline">
                <Copy /> Copy Payment Link
              </Button>
            </SheetTitle>
            <SheetDescription className="space-y-3">
              <div className="flex gap-3">
                <p>Customer:</p>{" "}
                <p className="text-secondary text-base font-medium">John Doe</p>
              </div>
              <div className="flex gap-3">
                <p>Invoice date:</p>{" "}
                <p className="text-secondary text-base font-medium">
                  2024-03-21
                </p>
              </div>
              <div className="flex gap-3">
                <p>Service:</p>{" "}
                <p className="text-secondary text-base font-medium">
                  Oil Change
                </p>
              </div>
              <div className="flex gap-3">
                <p>Status:</p>{" "}
                <p className="bg-[rgba(0,177,76,0.12)] p-1 rounded-md text-secondary text-base font-medium">
                  Paid in full
                </p>
              </div>
              <div className="flex gap-3">
                <p>Staff:</p>{" "}
                <p className="text-secondary text-base font-medium">John Doe</p>
              </div>
              <div className="flex gap-3">
                <p>Total:</p>{" "}
                <p className="text-secondary text-base font-medium">$100.00</p>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default InvoiceDetails;
