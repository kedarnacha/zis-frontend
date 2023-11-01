import { PhoneIcon } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

const CallCenter = () => {
  return (
    <div className="p-5">
      <p className="font-semibold">Ingin Menanyakan Lebih Jauh?</p>
      <p className="mb-3 mt-4 text-sm">Hubungi Call Center ZIS Indosat</p>
      <Button className="w-full" variant="outline" size="lg">
        <PhoneIcon className="mr-2 h-5 w-5 text-orange-500" />
          <a href="https://api.whatsapp.com/send?phone=6285693318006">Hubungi Call Center</a>
      </Button>
    </div>
  );
};

export default CallCenter;
