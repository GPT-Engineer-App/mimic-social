import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Facebook</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the main content area where posts will appear.</p>
        </CardContent>
      </Card>
      {/* Add more content here */}
    </div>
  );
};

export default Index;
