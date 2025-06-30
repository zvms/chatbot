import { Input } from "~/components/ui/input";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
// eslint-disable-next-line import/no-unresolved
import MaterialSymbolsChevronRight from '~icons/material-symbols/chevron-right';

export default function Binding() {
  return (
    <div className="fixed inset-0 px-60 py-12 items-center justify-center z-50">
      <Card className="w-full px-12">
        <p className="text-center text-4xl mb-4 mt-12">Hello.</p>
        <p className="text-center text-xl mb-8">
          This is the first time for you to use this app. Please enter your ID
          to bind your account in ZVMS, so that we can authenticate your
          identity and provide you with a better experience.
        </p>
        <Input
          className="mx-4 my-12"
          type="number"
          placeholder="Please enter your ID"
        />
        <Button className="mx-4 my-4 text-center">
            Continue
            <MaterialSymbolsChevronRight className="inline-block ml-2" />
        </Button>
      </Card>
    </div>
  );
}
