import { View } from 'react-native';
import StudentRoster from '@/components/StudentRoster';

export default function Homescreen() {
  return (
    <View style={{ paddingTop: 80}}>
      <StudentRoster />
    </View>
  );
}