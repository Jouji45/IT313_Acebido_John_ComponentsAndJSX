import { useState } from 'react';
import {View, Text, TextInput } from 'react-native';

type StudentCardProps = {
    name: string;
    course: string;
    units: number;
    isFullLoad: boolean;
};

export function StudentCard({ name, course, units, isFullLoad }: StudentCardProps) {
    const [note, setNote] = useState('');

    return (
        <View>
            <Text>{name}</Text>
            <Text>{course}</Text>
            <Text>{units}</Text>
            {isFullLoad && <Text>Full Load</Text>}
            <TextInput value={note} onChangeText={setNote} placeholder="Type a note..." style={{ borderWidth: 1, padding: 8 }} />
        </View>
    );
}

export default StudentCard;