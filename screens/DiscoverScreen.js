import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import EventCard from '../components/EventCard';
import theme from '../constants/theme';

const MOCK_EVENTS = [
    {
        id: '1',
        title: 'Belgrad Forest Run',
        location: 'Sarıyer, İstanbul',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2669&auto=format&fit=crop',
        description: 'Join us for a refreshing morning run through the beautiful trails of Belgrad Forest. Suitable for all levels.',
        distance: '5K',
        time: '09:00 AM',
        pace: 'Relaxed',
    },
    {
        id: '2',
        title: 'Morning Yoga',
        location: 'Caddebostan Sahil',
        image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2670&auto=format&fit=crop',
        description: 'Start your day with a calming yoga session by the sea. Bring your own mat!',
        distance: 'N/A',
        time: '07:30 AM',
        pace: 'N/A',
    },
    {
        id: '3',
        title: 'Cycling Bosphorus',
        location: 'Beşiktaş - Sarıyer',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2670&auto=format&fit=crop',
        description: 'A scenic cycling tour along the Bosphorus. Helmet required.',
        distance: '20K',
        time: '08:00 AM',
        pace: 'Moderate',
    },
    {
        id: '4',
        title: 'Night Tennis Match',
        location: 'Etiler Tennis Club',
        image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2670&auto=format&fit=crop',
        description: 'Friendly tennis matches under the floodlights. All skill levels welcome.',
        distance: 'Match',
        time: '08:00 PM',
        pace: 'Competitive',
    },
];

const DiscoverScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <EventCard
            event={item}
            onPress={() => navigation.navigate('ActivityDetail', { event: item })}
        />
    );

    return (
        <ScreenWrapper>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Discover Events</Text>
                <Text style={styles.headerSubtitle}>Find your next challenge</Text>
            </View>
            <FlatList
                data={MOCK_EVENTS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.spacing.l,
        paddingTop: theme.spacing.m,
        paddingBottom: theme.spacing.s,
    },
    headerTitle: {
        color: theme.colors.text,
        fontSize: theme.typography.h1.fontSize,
        fontWeight: theme.typography.h1.fontWeight,
        marginBottom: theme.spacing.xs,
    },
    headerSubtitle: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.body.fontSize,
    },
    listContent: {
        paddingBottom: theme.spacing.xl,
        paddingTop: theme.spacing.s,
    },
});

export default DiscoverScreen;
