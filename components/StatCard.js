import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import theme from '../constants/theme';

const CircularProgress = ({ size, strokeWidth, progress, color, backgroundColor }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress * circumference;

    return (
        <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
            <Svg height={size} width={size}>
                <Circle
                    stroke={backgroundColor}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <Circle
                    stroke={color}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                />
            </Svg>
            <View style={styles.absoluteCenter}>
                <Text style={[styles.progressText, { color }]}>{Math.round(progress * 100)}%</Text>
            </View>
        </View>
    );
};

const StatCard = ({ type = 'grid', title, value, icon: Icon, progress, color = theme.colors.primary }) => {
    if (type === 'progress') {
        return (
            <View style={[styles.card, styles.progressCard]}>
                <View style={styles.progressContainer}>
                    <CircularProgress
                        size={80}
                        strokeWidth={8}
                        progress={progress}
                        color={color}
                        backgroundColor={theme.colors.background}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.value}>{value}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={[styles.card, styles.gridCard]}>
            {Icon && <Icon size={24} color={color} style={styles.icon} />}
            <Text style={styles.gridValue}>{value}</Text>
            <Text style={styles.gridTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.l,
        padding: theme.spacing.m,
        alignItems: 'center',
        justifyContent: 'center',
        margin: theme.spacing.s,
        // Shadow for iOS
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 3,
    },
    progressCard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
    },
    gridCard: {
        flex: 1,
        aspectRatio: 1,
    },
    progressContainer: {
        marginRight: theme.spacing.m,
    },
    textContainer: {
        justifyContent: 'center',
    },
    title: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.caption.fontSize,
        marginBottom: theme.spacing.xs,
    },
    value: {
        color: theme.colors.white,
        fontSize: theme.typography.h3.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
    },
    absoluteCenter: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    icon: {
        marginBottom: theme.spacing.s,
    },
    gridValue: {
        color: theme.colors.white,
        fontSize: theme.typography.h3.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
        marginBottom: theme.spacing.xs,
    },
    gridTitle: {
        color: theme.colors.textSecondary,
        fontSize: 12,
    },
});

export default StatCard;
