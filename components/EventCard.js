import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin } from 'lucide-react-native';
import theme from '../constants/theme';
import Button from './Button';

const { width } = Dimensions.get('window');

const EventCard = ({ event, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.cardContainer}>
            <ImageBackground
                source={{ uri: event.image }}
                style={styles.backgroundImage}
                imageStyle={styles.imageStyle}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.gradient}
                >
                    <View style={styles.contentContainer}>
                        <View>
                            <Text style={styles.title}>{event.title}</Text>
                            <View style={styles.locationContainer}>
                                <MapPin size={16} color={theme.colors.primary} />
                                <Text style={styles.locationText}>{event.location}</Text>
                            </View>
                        </View>
                        <Button
                            title="Join Event"
                            onPress={onPress}
                            style={styles.joinButton}
                            textStyle={styles.joinButtonText}
                        />
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        height: 250,
        width: width - theme.spacing.l * 2,
        marginVertical: theme.spacing.m,
        alignSelf: 'center',
        borderRadius: theme.borderRadius.l,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    imageStyle: {
        borderRadius: theme.borderRadius.l,
    },
    gradient: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: theme.spacing.m,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    title: {
        color: theme.colors.white,
        fontSize: theme.typography.h3.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
        marginBottom: theme.spacing.xs,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.caption.fontSize,
        marginLeft: theme.spacing.xs,
    },
    joinButton: {
        paddingVertical: theme.spacing.s,
        paddingHorizontal: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
        backgroundColor: theme.colors.primary,
    },
    joinButtonText: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default EventCard;
