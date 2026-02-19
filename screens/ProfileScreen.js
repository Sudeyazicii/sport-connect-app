import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Flame, Footprints, Timer, Map, Dumbbell } from 'lucide-react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import StatCard from '../components/StatCard';
import theme from '../constants/theme';

const ProfileScreen = () => {
    return (
        <ScreenWrapper>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop' }}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>Alex Rudolphi</Text>
                    <Text style={styles.bio}>Fitness Enthusiast & Runner</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Daily Goals</Text>
                    <View style={styles.progressRow}>
                        <StatCard
                            type="progress"
                            title="Calories"
                            value="350 kcal"
                            progress={0.7}
                            color="#FF4757"
                        />
                        <StatCard
                            type="progress"
                            title="Steps"
                            value="5,000"
                            progress={0.5}
                            color="#2ED573"
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Overview</Text>
                    <View style={styles.gridContainer}>
                        <View style={styles.gridRow}>
                            <StatCard
                                type="grid"
                                title="Active Minutes"
                                value="45 min"
                                icon={Timer}
                                color="#FFA502"
                            />
                            <StatCard
                                type="grid"
                                title="Distance"
                                value="12.5 km"
                                icon={Map}
                                color="#1E90FF"
                            />
                        </View>
                        <View style={styles.gridRow}>
                            <StatCard
                                type="grid"
                                title="Workouts"
                                value="12"
                                icon={Dumbbell}
                                color="#7BED9F"
                            />
                            <StatCard
                                type="grid"
                                title="Avg Pace"
                                value="5'30''"
                                icon={Footprints}
                                color="#A4B0BE"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        padding: theme.spacing.l,
    },
    header: {
        alignItems: 'center',
        marginBottom: theme.spacing.xl,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: theme.spacing.m,
        borderWidth: 2,
        borderColor: theme.colors.primary,
    },
    name: {
        fontSize: theme.typography.h2.fontSize,
        fontWeight: theme.typography.h2.fontWeight,
        color: theme.colors.white,
        marginBottom: 4,
    },
    bio: {
        fontSize: theme.typography.body.fontSize,
        color: theme.colors.textSecondary,
    },
    section: {
        marginBottom: theme.spacing.xl,
    },
    sectionTitle: {
        fontSize: theme.typography.h3.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
        color: theme.colors.white,
        marginBottom: theme.spacing.m,
    },
    progressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    gridContainer: {
        gap: theme.spacing.m,
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: theme.spacing.m,
    },
});

export default ProfileScreen;
