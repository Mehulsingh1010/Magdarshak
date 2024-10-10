import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GeneralSettings() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-2xl font-bold">General Settings</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Model Status</h3>
            <Badge variant="success">Working</Badge>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Camera Status</h3>
            <Badge variant="success">All Active</Badge>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Accidents</h3>
            <Badge variant="secondary">None</Badge>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Light Delay</h3>
            <Badge variant="warning">Cam 1 (+5s)</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
