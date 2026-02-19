import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { MapPin, Clock, Ruler, Gauge } from 'lucide-react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Button';
import theme from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const StatItem = ({ icon: Icon, label, value }) => (
    <View style={styles.statItem}>
        <View style={styles.iconContainer}>
            <Icon size={24} color={theme.colors.primary} />
        </View>
        <View>
            <Text style={styles.statLabel}>{label}</Text>
            <Text style={styles.statValue}>{value}</Text>
        </View>
    </View>
);

const ActivityDetailScreen = ({ route, navigation }) => {
    const { event } = route.params;

    return (
        <ScreenWrapper style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: event.image }} style={styles.image} />
                    <LinearGradient
                        colors={['transparent', theme.colors.background]}
                        style={styles.gradient}
                    />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>{event.title}</Text>

                    <View style={styles.locationContainer}>
                        <MapPin size={20} color={theme.colors.textSecondary} />
                        <Text style={styles.location}>{event.location}</Text>
                    </View>

                    <View style={styles.statsRow}>
                        <StatItem icon={Clock} label="Time" value={event.time} />
                        <StatItem icon={Ruler} label="Distance" value={event.distance} />
                        <StatItem icon={Gauge} label="Pace" value={event.pace} />
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>About Event</Text>
                        <Text style={styles.description}>{event.description}</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Button title="Join Event" onPress={() => { }} style={styles.joinButton} />
            </View>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 100, // Space for sticky footer
    },
    imageContainer: {
        height: height * 0.45,
        width: width,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 100,
    },
    content: {
        paddingHorizontal: theme.spacing.l,
        marginTop: -theme.spacing.xl, // Pull up content over gradient
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.colors.white,
        marginBottom: theme.spacing.s,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.l,
    },
    location: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.body.fontSize,
        marginLeft: theme.spacing.xs,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.m,
        borderRadius: theme.borderRadius.l,
        marginBottom: theme.spacing.l,
    },
    statItem: {
        alignItems: 'center',
        flex: 1,
    },
    iconContainer: {
        marginBottom: theme.spacing.xs,
        backgroundColor: 'rgba(255, 71, 87, 0.1)',
        padding: theme.spacing.s,
        borderRadius: theme.borderRadius.m,
    },
    statLabel: {
        color: theme.colors.textSecondary,
        fontSize: 12,
        marginBottom: 2,
    },
    statValue: {
        color: theme.colors.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    section: {
        marginTop: theme.spacing.m,
    },
    sectionTitle: {
        fontSize: theme.typography.h3.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
        color: theme.colors.white,
        marginBottom: theme.spacing.s,
    },
    description: {
        fontSize: theme.typography.body.fontSize,
        color: theme.colors.textSecondary,
        lineHeight: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: theme.spacing.l,
        backgroundColor: theme.colors.background,
        borderTopWidth: 1,
        borderTopColor: theme.colors.surface,
    },
    joinButton: {
        width: '100%',
    },
});

export default ActivityDetailScreen;
