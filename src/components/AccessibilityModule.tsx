import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PersonStanding, Eye, Type, Link as LinkIcon, RefreshCw, X, ZoomIn, BookOpen, Palette } from 'lucide-react';
import { cn } from './Layout';

interface AccessibilityMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessibilityMenu({ isOpen, onClose }: AccessibilityMenuProps) {
  const [biggerText, setBiggerText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [textSpacing, setTextSpacing] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (biggerText) {
      html.classList.add('ada-text-scaled');
      html.style.setProperty('--ada-text-scale', '120%');
    } else {
      html.classList.remove('ada-text-scaled');
      html.style.setProperty('--ada-text-scale', '100%');
    }

    if (highContrast) html.classList.add('ada-high-contrast');
    else html.classList.remove('ada-high-contrast');

    if (highlightLinks) html.classList.add('ada-highlight-links');
    else html.classList.remove('ada-highlight-links');

    if (dyslexiaFont) html.classList.add('ada-dyslexia-font');
    else html.classList.remove('ada-dyslexia-font');

    if (textSpacing) html.classList.add('ada-text-spacing');
    else html.classList.remove('ada-text-spacing');

    if (grayscale) html.classList.add('ada-grayscale');
    else html.classList.remove('ada-grayscale');

  }, [biggerText, highContrast, highlightLinks, dyslexiaFont, textSpacing, grayscale]);

  const handleReset = () => {
    setBiggerText(false);
    setHighContrast(false);
    setHighlightLinks(false);
    setDyslexiaFont(false);
    setTextSpacing(false);
    setGrayscale(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (invisible but clickable to close) */}
          <div
            onClick={onClose}
            className="fixed inset-0 z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-[70] overflow-hidden border border-sand-dark flex flex-col max-h-[85vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-title"
          >
            <div className="bg-navy text-white p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PersonStanding className="w-5 h-5" />
                <h2 id="a11y-title" className="font-sans font-bold text-base tracking-normal uppercase">Accessibility</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close Accessibility Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 overflow-y-auto flex flex-col gap-2">
              <p className="text-xs text-navy/70 mb-1 uppercase tracking-widest font-medium">Adjustments</p>
              
              <A11yButton 
                icon={<ZoomIn className="w-5 h-5" />}
                label="Bigger Text"
                isActive={biggerText}
                onClick={() => setBiggerText(!biggerText)}
              />
              
              <A11yButton 
                icon={<Eye className="w-5 h-5" />}
                label="High Contrast"
                isActive={highContrast}
                onClick={() => setHighContrast(!highContrast)}
              />
              
              <A11yButton 
                icon={<Palette className="w-5 h-5" />}
                label="Grayscale"
                isActive={grayscale}
                onClick={() => setGrayscale(!grayscale)}
              />
              
              <A11yButton 
                icon={<BookOpen className="w-5 h-5" />}
                label="Dyslexia Friendly"
                isActive={dyslexiaFont}
                onClick={() => setDyslexiaFont(!dyslexiaFont)}
              />
              
              <A11yButton 
                icon={<Type className="w-5 h-5" />}
                label="Text Spacing"
                isActive={textSpacing}
                onClick={() => setTextSpacing(!textSpacing)}
              />
              
              <A11yButton 
                icon={<LinkIcon className="w-5 h-5" />}
                label="Highlight Links"
                isActive={highlightLinks}
                onClick={() => setHighlightLinks(!highlightLinks)}
              />
            </div>

            <div className="p-3 bg-sand border-t border-sand-dark">
              <button
                onClick={handleReset}
                className="w-full py-2 flex items-center justify-center gap-2 text-sm uppercase tracking-widest text-navy bg-white border border-navy hover:bg-navy hover:text-white transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Reset Settings
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function A11yButton({ 
  icon, 
  label, 
  isActive, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  isActive: boolean; 
  onClick: () => void; 
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2.5 p-2 rounded-xl border transition-all text-left w-full",
        isActive 
          ? "border-navy bg-navy/5 text-navy shadow-sm" 
          : "border-sand-dark bg-white text-navy/80 hover:bg-sand hover:border-navy/30"
      )}
      aria-pressed={isActive}
    >
      <div className={cn(
        "p-1.5 rounded-lg",
        isActive ? "bg-navy text-white" : "bg-sand text-navy"
      )}>
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
