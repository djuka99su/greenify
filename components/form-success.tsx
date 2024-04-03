import { CheckCircle } from 'lucide-react';

interface FromSuccessProps {
    message?: string;
}

import React from 'react'

export const FormSuccess = ({message} : FromSuccessProps) => {

    if(!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
        <CheckCircle className="h-4 w-4"/>
        <p>{message}</p>
    </div>
  )
}
