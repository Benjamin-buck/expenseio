import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CategoriesTable = () => {
  return (
    <div className="card">
      <div>
        <h2 className="card_heading">Categories</h2>
        <p className="card_desc">
          Your categories in comparison to your amount spent.
        </p>
      </div>
      <Table className="text-md mt-5">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-black">Category</TableHead>
            <TableHead className="text-right font-bold text-black">
              Amount Spent
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Paid</TableCell>
            <TableCell className="text-right">
              <span className="font-bold text-green-500">20$</span> of{" "}
              <span className="font-bold text-green-500">200$</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoriesTable;
