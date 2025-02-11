import { TemplateRef } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChart } from './organizationchart';

/**
 * Custom node select event.
 * @see {@link OrganizationChart.onNodeSelect}
 */
export interface OrganizationChartNodeSelectEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Node instance.
     */
    node: TreeNode;
}
/**
 * Custom node unselect event.
 * @see {@link OrganizationChart.onNodeUnSelect}
 */
export interface OrganizationChartNodeUnSelectEvent extends OrganizationChartNodeSelectEvent {}
/**
 * Custom node expand event.
 * @see {@link OrganizationChart.onNodeExpand}
 * @extends {OrganizationChartNodeSelectEvent}
 */
export interface OrganizationChartNodeExpandEvent extends OrganizationChartNodeSelectEvent {}
/**
 * Custom node collapse event.
 * @see {@link OrganizationChart.onNodeCollapse}
 * @extends {OrganizationChartNodeSelectEvent}
 */
export interface OrganizationChartNodeCollapseEvent extends OrganizationChartNodeSelectEvent {}
/**
 * Defines valid templates in OrganizationChart.
 * @group Templates
 */
export interface OrganizationChartTemplates {
    /**
     * Custom toggler icon template.
     * @param {Object} context - item data.
     */
    togglericon(context: {
        /**
         * Expanded state of the node.
         */
        $implicit: boolean;
    }): TemplateRef<{ $implicit: boolean }>;
}
