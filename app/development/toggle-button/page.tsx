"use client"
import React, { useState } from 'react'
import ToggleButton from './ToggleButton'

export default function ToggleButtonPage() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background" id="toggle-button">
      <div className="flex flex-col items-center justify-center gap-8 p-8">
        <h1 className="text-2xl font-semibold text-foreground mb-4">Toggle Button Component</h1>
        
        <div className="flex flex-col gap-6 bg-white/5 rounded-xl p-8 backdrop-blur-xl border border-white/10">
          <ToggleButton 
            enabled={toggle1}
            onChange={setToggle1}
            label="Small Toggle"
            size="sm"
          />
          
          <ToggleButton 
            enabled={toggle2}
            onChange={setToggle2}
            label="Medium Toggle (Default)"
            size="md"
          />
          
          <ToggleButton 
            enabled={toggle3}
            onChange={setToggle3}
            label="Large Toggle"
            size="lg"
          />
          
          <ToggleButton 
            enabled={toggle4}
            onChange={setToggle4}
            size="md"
          />
        </div>
      </div>
    </div>
  );
}

