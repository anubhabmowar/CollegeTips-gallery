import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2 } from 'lucide-react';

interface CategoryAISuggestionsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  suggestedNames: string[];
  isLoading: boolean;
}

export function CategoryAISuggestionsDialog({ isOpen, onClose, suggestedNames, isLoading }: CategoryAISuggestionsDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>AI Category Suggestions</DialogTitle>
          <DialogDescription>
            Here are some fun alternative category names suggested by AI!
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-24">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : suggestedNames.length > 0 ? (
            <ScrollArea className="h-48">
              <ul className="list-disc list-inside space-y-2 p-2">
                {suggestedNames.map((name, index) => (
                  <li key={index} className="text-sm">{name}</li>
                ))}
              </ul>
            </ScrollArea>
          ) : (
            <p className="text-center text-muted-foreground">No suggestions available at the moment.</p>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
